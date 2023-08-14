import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchData } from '../ts/axios'; // Import the function you want to test


// Create a new instance of the mock adapter
const mock = new MockAdapter(axios);

// Mock a successful API response
mock.onGet('/api/data').reply(200, {
  key: 'value',
});

// Mock a failed API response
mock.onGet('/api/error').reply(500);

describe('API Service', () => {
  it('fetches data successfully', async () => {
    const data = await fetchData('/api/data');
    expect(data.key).toBe('value');
  });

  it('handles errors', async () => {
    try {
      await fetchData('/api/error');
    } catch (error) {
      expect(error.response.status).toBe(500);
    }
  });
});
