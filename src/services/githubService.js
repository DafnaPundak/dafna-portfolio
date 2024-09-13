import axios from 'axios';

const githubUsername = 'dafnapundak';

export const getRepositories = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
