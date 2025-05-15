export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          content: Json
          summary: string | null
          image_url: string | null
          status: 'draft' | 'published' | 'archived'
          references: string[]
          tags: string[]
          author_id: string
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: Json
          summary?: string | null
          image_url?: string | null
          status?: 'draft' | 'published' | 'archived'
          references?: string[]
          tags?: string[]
          author_id: string
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: Json
          summary?: string | null
          image_url?: string | null
          status?: 'draft' | 'published' | 'archived'
          references?: string[]
          tags?: string[]
          author_id?: string
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      article_revisions: {
        Row: {
          id: string
          article_id: string
          content: Json
          editor_id: string
          created_at: string
          comment: string | null
        }
        Insert: {
          id?: string
          article_id: string
          content: Json
          editor_id: string
          created_at?: string
          comment?: string | null
        }
        Update: {
          id?: string
          article_id?: string
          content?: Json
          editor_id?: string
          created_at?: string
          comment?: string | null
        }
      }
    }
  }
}