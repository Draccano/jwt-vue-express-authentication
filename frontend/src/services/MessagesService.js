import Api from '@/services/Api';

export default {
  index(id) {
    return Api().get(`/${id}/messages`);
  },
  create(body) {
    return Api().post(`/messages`, body);
  },
  delete(IDs) {
    return Api().delete(`/${IDs.userId}/messages/${IDs.messageId}`);
  },
};
