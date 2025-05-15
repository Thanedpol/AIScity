/*
  # Create CMS tables

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (jsonb)
      - `summary` (text)
      - `image_url` (text)
      - `status` (text)
      - `references` (text[])
      - `tags` (text[])
      - `author_id` (uuid, references auth.users)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `published_at` (timestamptz)
    
    - `article_revisions`
      - `id` (uuid, primary key)
      - `article_id` (uuid, references articles)
      - `content` (jsonb)
      - `editor_id` (uuid, references auth.users)
      - `created_at` (timestamptz)
      - `comment` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  summary text,
  image_url text,
  status text NOT NULL DEFAULT 'draft',
  references text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  author_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz,
  CONSTRAINT valid_status CHECK (status IN ('draft', 'published', 'archived'))
);

-- Create article revisions table
CREATE TABLE IF NOT EXISTS article_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles ON DELETE CASCADE NOT NULL,
  content jsonb NOT NULL,
  editor_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  comment text
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_revisions ENABLE ROW LEVEL SECURITY;

-- Policies for articles
CREATE POLICY "Authenticated users can create articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authenticated users can read all published articles"
  ON articles
  FOR SELECT
  TO authenticated
  USING (status = 'published' OR auth.uid() = author_id);

CREATE POLICY "Authors can update their own articles"
  ON articles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete their own articles"
  ON articles
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Policies for article revisions
CREATE POLICY "Authenticated users can create revisions"
  ON article_revisions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM articles 
      WHERE id = article_id 
      AND (author_id = auth.uid())
    )
  );

CREATE POLICY "Authors can read revisions of their articles"
  ON article_revisions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM articles 
      WHERE id = article_id 
      AND (author_id = auth.uid())
    )
  );