import request from '../utils/request';

// 管理员登录
export const adminLogin = data => request.post('/api/v1/admin/login', data);
export const Login = data => request.post('/api/v1/admin/login', data);
