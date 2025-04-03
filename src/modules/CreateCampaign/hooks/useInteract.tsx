import { useState, useEffect } from 'react';
import { CONTRACT_CONFIG, ABI } from '@/lib/contract';
import { publicClient } from '@/lib/interactor/interactor';

const useInteract = () => {
  const [data, setData] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await publicClient.readContract({
          address: CONTRACT_CONFIG.address,
          abi: ABI,
          functionName: 'getAllCategories'
        });

        console.log('Contract Categories:', result);
        setData(result as string[]);
      } catch (err) {
        console.log('Error fetching data:', err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useInteract;
