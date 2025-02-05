import request from '@/utils/request';

export const fetchUsers = () => {
    return request({
        url: '/user/list',
        method: 'get'
    });
};

