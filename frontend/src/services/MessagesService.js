import Api from '@/services/Api';

export default {
  index() {
    return Api().get(`/messages`);
  },
  create(body) {
    return Api().post(`/messages`, body);
  },
  delete(IDs) {
    return Api().delete(`/messages/${IDs.messageId}`);
  },
};
