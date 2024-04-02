import {useState} from 'react';
import {useEffect} from 'react';

export function useFetchVideoData() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1/todos',
      );
      const data = await response.json();

      const fetchedVideos = data.map(item => ({
        id: item.id,
        title: item.title,
      }));
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return {videos};
}
