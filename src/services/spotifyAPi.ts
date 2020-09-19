import axios from 'axios';

const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse',
  headers: {
    'Authorization': 'Bearer BQA4WFmndUjKTXYfQnrzaJqtckDQWSPljyKa1TqG3b-qwXmb5N7e8IfZvtZYGZst5g15CQz_s55BvecmzobFixk9MaxQQQ3MtOuK-RvRu4BnyUj2GSg0ODigaQv0rOWWqJ5kMV0yHLJuAfxsvi-jrzjC_qf1v1zYlZ1UeixyOmgFgObeGuy7gvGCaD6bpzbIqupMtMcjf2U0_oDPkqoksSSvKDKD9fLxN9KwyXIyDV3NhupE3s3J5gc7aX0Ei7oHowG2t80b8YpOEg'
  },
});

export default apiSpotify;
