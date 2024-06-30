'use client'
import Image from 'next/image'
import MostLoved from '../components/mostLoved'
import MostRecently from '../components/mostRecently'
import LeaderBoard from '../components/leaderboard'
import HotNFTs from '../components/hotNFTs'
import LatestNFTs from '../components/latestNFTs'
import Brand from '../components/brand'
import CreateBanner from '../components/createbanner'
import Header1 from '../components/header1'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'

export default function Home() {
	const isDevelopment = process.env.NEXT_PUBLIC_NODE_ENV === 'development'

	const apiUrl = isDevelopment
		? 'http://localhost:3000' // Local development URL
		: 'https://discover-two.vercel.app' // Production URL

	// console.log("api url", apiUrl);

	const [brands, setBrands] = useState([]);
	const [phygitals, setPhygitals] = useState<any>([]);
	const [collections, setCollections] = useState<any>([]);
	const [loading, setLoading] = useState(false);

	const getBrands = async () => {
		try {
			setLoading(true);
		 //   const res = await fetch(`${apiUrl}/api/brands`);
		 //   const phyres = await fetch(`${apiUrl}/api/phygitals`);
		 //   const collres = await fetch(`${apiUrl}/api/collections`);

		  const baseUri = process.env.NEXT_PUBLIC_URI || 'https://app.myriadflow.com';

		  const res = await fetch(`${baseUri}/brands/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
			});

			const phyres = await fetch(`${baseUri}/phygitals/all`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
				});

				const collres = await fetch(`${baseUri}/collections/all`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
					});

		  
	  
		  if (!res.ok || !phyres.ok || !collres.ok) {
			throw new Error('Failed to fetch data');
		  }
	  
		  const result = await res.json();
		  const phyresult = await phyres.json();
		  const collresult = await collres.json();
	  
		  setBrands(result);
		  setPhygitals(phyresult);
		  setCollections(collresult);

		  setLoading(false);

		//   console.log("new database output", result, phyresult, collresult);
		} catch (error) {
		  console.error('Error fetching data:', error);
		  setLoading(false);
		}
	  };

	useEffect(() => {
		getBrands()
	}, [])

	const exploreButtonStyle = {
		padding: '10px 40px',
		fontSize: '1rem',
		fontWeight: 'bold',
		color: 'white',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		backgroundImage: 'url("./Rectangle 12.png")',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Optional: Add box-shadow for a better visual effect
	}

	return (
		<div className='bg-black'>
			<div className="px-10" 
			style={{display:'flex', justifyContent: 'space-between', 
			background: 'linear-gradient(90deg, #FDF4F5, #00A9FF, #604CC3, #FF55BB)', paddingBottom: '10px'}}>
        <div
          className='mt-4'
        >
          <img src="/logo.png" style={{ width: '200px' }} alt="Logo" />

        </div>
        <div style={{display:'flex', gap:'40px', fontSize:'20px', color:'white'}} className="mt-6">
<div>Home</div>
<div>Discover</div>
<div>Studio</div>
<div>WebXR</div>
        </div>
        <div className="mt-6">
            <w3m-button />
        </div>
    </div>
			<div className='flex h-screen bg-white'>
				<div className='w-1/2 h-full px-16 flex flex-col justify-center'>
					<div className='text-7xl font-bold'>WebXR</div>
					<div className='text-6xl font-semibold mt-6'>Experience & Interact</div>
					<div className='text-2xl mt-10'>
					Interact with unique AI-powered brand ambassadors. 
					</div>
					<div className='flex gap-10 mt-10'>
					<button className="border"
        style={{
          background: "transparent",
          border: "6px solid transparent",
          borderRadius: "8px",
          backgroundImage: `
    linear-gradient(white, white),
    linear-gradient(to right, #AF40FF, #5B42F3, #00DDEB)
  `,
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          WebkitBackgroundClip: "content-box, border-box", // For Safari
          display: "block",
          width: "180px",
          height: "50px",
        }}
        >Connect</button>
					</div>
				</div>

				<div
					className='w-1/2'
					style={{
						backgroundImage: 'url("./landing.png")',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						position: 'relative',
					}}
				>
					<img
						src='./image 4.png'
						alt='Top Left'
						style={{
							position: 'absolute',
							top: '100px',
							left: '40px',
							width: '280px',
							height: '280px',
						}}
					/>
					<img
						src='./image 6.png'
						alt='Top Right'
						style={{
							position: 'absolute',
							top: '100px',
							right: '40px',
							width: '280px',
							height: '280px',
						}}
					/>
					<img
						src='./image 8.png'
						alt='Bottom Left'
						style={{
							position: 'absolute',
							bottom: '40px',
							left: '40px',
							width: '280px',
							height: '280px',
						}}
					/>

					<img
						src='./image 7.png'
						alt='Overlay'
						style={{
							position: 'absolute',
							bottom: '40px',
							left: '40px',
							width: '280px',
							height: '300px',
							marginBottom: '20px',
						}}
					/>

					<img
						src='./image 5.png'
						alt='Bottom Right'
						style={{
							position: 'absolute',
							bottom: '40px',
							right: '40px',
							width: '280px',
							height: '280px',
						}}
					/>
				</div>
			</div>

			{/* <div className='pt-10 bg-white px-10'>
				<MostLoved collectionsdata={collections}/>
			</div>

			<div className='pt-40 bg-white px-10'>
				<LatestNFTs hotnftdata={phygitals}/>
			</div> */}

			<div className='pt-20 bg-white'>
				<LeaderBoard />
			</div>

			{/* <div className='pt-40 bg-white px-10'>
				<HotNFTs hotnftdata={phygitals}/>
			</div>

			<div className='pt-40 bg-white px-10'>
				<Brand brandsdata={brands}/>
			</div>

			<div className='bg-white'>
				<CreateBanner />
			</div> */}

			<div className='bg-white pt-20'>
				<Footer />
			</div>


			{loading && (
  <div
    style={{
    //   backgroundColor: "#222944E5",
      display: "flex",
      overflowY: "auto",
      overflowX: "hidden",
      position: "fixed",
      inset: 0,
      zIndex: 50,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxHeight: "100%",
    }}
    id="popupmodal"
  >
    <div style={{ position: "relative", padding: "1rem", width: "100%", maxHeight: "100%" }}>
      <div style={{ position: "relative"}}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <img
            src="https://i.pinimg.com/originals/36/3c/2e/363c2ec45f7668e82807a0c053d1e1d0.gif"
            alt="Loading icon"
          />
        </div>
      </div>
    </div>
  </div>
)}

		</div>
	)
}
