import {useEffect, useState} from 'react';
import {useQuery} from 'react-query';

export function useFetchVideoData() {
  const [startQuery, setStartQuery] = useState(false);

  useEffect(() => {
    setStartQuery(false);
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1/todos',
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  return useQuery('videos', fetchVideos, {enabled: startQuery});
}
