import request from '@/utils/request';

export const fetchUsers = () => {
    return request({
        url: '/user/info',
        method: 'get'
    });
};

