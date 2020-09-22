import axios from 'axios';

const apiSpotify = axios.create({
  baseURL: 'https://api.spotify.com/v1/browse',
  headers: {
    'Authorization': 'Bearer BQC7LhYTsPXQ1OMO6E4uk-SeU_rKmtIzj46FZLg41nqWcN0Uq8mgJtRPbqRyC1HbV9NEFbnz9Uqc8ykq8BJ8YQedrINOFCqE32bOH6z-kbNW-cqWLnFDpAsDNw8aVPq6-SGr749pJVamFAM7SybhkAiudreYebGxPFX8VgBkHUuHkRphzbbnSerbFPV9HRSARlutapbcTNkrtwnPPHIpoD0a2iltuWoKn0eYoUove-yb59QQJICHpBZ_6SDs1SKW3C6RjB6MJZMxjg'
  },
});

export default apiSpotify;
