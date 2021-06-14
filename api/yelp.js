import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer p_d0ja5KyRM5hXfnLnX9wwhWXWrD9xUAgCZVmZYHNgEopuqqzT9l-DuMV-M-aLlr9NWxvMi7Tw7evAJGbWOZX3CD8HyoFP-CCBpq5JmiCfcYIkpLdNypCv4vzDbSXXYx',
  },
});
