import { expect, jest } from '@jest/globals'
import getPhotosByAlbumId from '../index.js'

jest.unstable_mockModule('axios', () => ({
  axios: jest.fn(),
}));

const { axios } = await import('axios');

describe('test getPhotosByAlbumId', () => {
  it('fetches photos by album id', async () => {
    const ID = 3;
    const expectedConfig = {
      baseURL: 'https://jsonplaceholder.typicode.com/albums',
      method: 'get',
      url: `/${ID}/photos?_limit=3`
    };
    const expectedData = [
      { albumId: ID, id: 1, title: 'accusamus beatae ad facilis cum similique qui sunt' },
      { albumId: ID, id: 2, title: 'reprehenderit est deserunt velit ipsam' },
      { albumId: ID, id: 3, title: 'officia porro iure quia iusto qui ipsa ut modi' }
    ];

    console.info({axios});

    axios.mockResolvedValueOnce({ data: expectedData });

    const photos = await getPhotosByAlbumId(ID);

    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith(expectedConfig);
    expect(axios).toHaveReturned();
    expect(photos).toEqual(expectedData);
  });
});