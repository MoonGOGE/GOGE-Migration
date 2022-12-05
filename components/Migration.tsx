import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_GOGE_JSON_RPC_PROVIDER
);

const [balance, setBalance] = useState() as any;
const [account, setAccount] = useState(null);

async function getBalance() {
  const ethereum = (window as any).ethereum;

  if (ethereum) {
    const [account] = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(account);

    const balance = Number(
      ethers.utils.formatEther(await provider.getBalance(account))
    );
    setBalance(balance.toFixed(2));
  } else {
    console.log("Please install Wallet");
  }
}

const Migration = () => {
    return (
        <>
            <div className="top-migration-section px-10">
                <div className="w-2/6 xs:w-5/6 sm:w-4/6 md:w-2/6 lg:w-2/6 xl:w-2/6 py-7 m-auto text-center font-semibold"><span>Goge Migration Page</span><br /><span className="text-sm">Migrate your v1 tokens for v2 tokens.</span></div>
            </div>
            <div className="flex h-screen">
                <div className="m-auto w-1/6 xs:w-5/6 sm:w-4/6 md:w-1/6 lg:w-1/6 xl:w-1/6">
                    <div className="migrate-box">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="mt-2 max-w-xl text-sm">
                                <span>v1 token balance:</span><br /><span>v2 token balance:</span>
                            </div>
                            <div className="mt-5 flex flex-col items-center">
                                <button
                                type="button"
                                className="inline-flex m-auto content-center migrate-button px-4 py-2 sm:text-sm"
                                >
                                Migrate
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-sm">
                        Disclaimer: You must be holding more than $2 of the v1 token to migrate
                    </div>
                </div>
            </div>
        </>
    )

}

export default Migration