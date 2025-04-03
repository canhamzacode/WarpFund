'use client';
import { useWriteContract } from 'wagmi';
import { CONTRACT_CONFIG, ABI } from '@/lib/contract';
import { useState, useEffect } from 'react';
import { publicClient } from '@/lib/interactor/interactor';
import { Campaign } from '@/types';

const useCampaign = () => {
  const { writeContract, isPending, isSuccess, error } = useWriteContract();
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await publicClient.readContract({
          address: CONTRACT_CONFIG.address,
          abi: ABI,
          functionName: 'getAllCategories'
        });

        console.log('Contract Categories:', result);
        setCategories(result as string[]);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setCategoryError((err as Error).message);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to create a new campaign
  const createCampaign = async ({
    title,
    description,
    goal,
    duration,
    categoryIndex
  }: Campaign) => {
    if (!title || !description || !goal || !duration) {
      alert('Please fill all fields.');
      return;
    }

    try {
      console.log('Creating campaign with params:', {
        title,
        description,
        goal: BigInt(goal),
        duration: BigInt(duration),
        categoryIndex: BigInt(categoryIndex)
      });

      const result = writeContract({
        abi: CONTRACT_CONFIG.abi,
        address: CONTRACT_CONFIG.address,
        functionName: 'createCampaign',
        args: [title, description, goal, Number(duration), Number(categoryIndex)]
      });

      console.log('Transaction Sent:', result);
      return result.hash;
    } catch (err) {
      console.error('Transaction Error:', err);
    }
  };

  const getAllCampaigns = async () => {
    try {
      const result = await publicClient.readContract({
        address: CONTRACT_CONFIG.address,
        abi: ABI,
        functionName: 'getAllCampaigns'
      });

      console.log('Contract Campaign:', result);
      // setCategories(result as string[]);
      setCampaigns(result as Campaign[]);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setCategoryError((err as Error).message);
    } finally {
      setLoadingCategories(false);
    }
  };

  return {
    createCampaign,
    isPending,
    isSuccess,
    error,
    categories,
    loadingCategories,
    categoryError,
    campaigns,
    getAllCampaigns
  };
};

export default useCampaign;
