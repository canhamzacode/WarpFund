'use client';
import { useWriteContract } from 'wagmi';
import { CONTRACT_CONFIG, ABI } from '@/lib/contract';
import { useState, useEffect } from 'react';
import { publicClient } from '@/lib/interactor/interactor';
import { Campaign, ContractCampaign, NewCampaignInput } from '@/types';
import { parseCampaign } from '@/lib/utils/index';

const useCampaign = () => {
  const { writeContract, isPending, isSuccess, error: writeContractErr } = useWriteContract();
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

  const createCampaign = async (campaignData: NewCampaignInput) => {
    const { title, description, goal, duration, categoryIndex } = campaignData;

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

      const result = await writeContract({
        abi: CONTRACT_CONFIG.abi,
        address: CONTRACT_CONFIG.address,
        functionName: 'createCampaign',
        args: [title, description, BigInt(goal), BigInt(duration), BigInt(categoryIndex)]
      });

      const unwatch = publicClient.watchContractEvent({
        address: CONTRACT_CONFIG.address,
        abi: ABI,
        eventName: 'CampaignCreated',
        onLogs: (logs) => {
          console.log('Event logs:', logs);
        }
      });

      console.log('Transaction Sent:', result);
      console.log('unwatch', unwatch);
      return result;
    } catch (err) {
      console.error('Transaction Error:', err);
    } finally {
      setLoadingCategories(false);
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

      const campaignsArray: Campaign[] = (result as readonly ContractCampaign[]).map(parseCampaign);

      setCampaigns(campaignsArray);
    } catch (err) {
      console.error('Error fetching campaigns:', err);
    } finally {
      setLoadingCategories(false);
    }
  };

  return {
    createCampaign,
    isPending,
    isSuccess,
    writeContractErr,
    categories,
    loadingCategories,
    categoryError,
    campaigns,
    getAllCampaigns
  };
};

export default useCampaign;
