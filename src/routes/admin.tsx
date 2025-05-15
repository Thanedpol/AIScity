import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/Admin/AdminLayout';
import AdminDashboard from '../components/Admin/Dashboard';
import ArticleList from '../components/Admin/Articles/ArticleList';
import ArticleEditor from '../components/Admin/Articles/ArticleEditor';
import ArticleRevisions from '../components/Admin/Articles/ArticleRevisions';
import MediaLibrary from '../components/Admin/Media/MediaLibrary';
import TagManager from '../components/Admin/Tags/TagManager';
import Settings from '../components/Admin/Settings/Settings';
import UserSettings from '../components/Admin/Settings/UserSettings';
import CategorySettings from '../components/Admin/Settings/CategorySettings';
import AppearanceSettings from '../components/Admin/Settings/AppearanceSettings';
import Login from '../components/Admin/Auth/Login';
import Profile from '../components/Admin/Auth/Profile';
import ProtectedRoute from '../components/Admin/Auth/ProtectedRoute';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      
      <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="articles">
          <Route index element={<ArticleList />} />
          <Route path="new" element={<ArticleEditor />} />
          <Route path=":id">
            <Route index element={<ArticleEditor />} />
            <Route path="revisions" element={<ArticleRevisions />} />
          </Route>
        </Route>
        <Route path="media" element={<MediaLibrary />} />
        <Route path="tags" element={<TagManager />} />
        <Route path="profile" element={<Profile />} />
        
        {/* Admin-only routes */}
        <Route path="settings">
          <Route index element={<Settings />} />
          <Route path="users" element={<UserSettings />} />
          <Route path="categories" element={<CategorySettings />} />
          <Route path="appearance" element={<AppearanceSettings />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}