import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import homepics from './ProductSummary'

// map container
const containerStyle = {
  width: '100%',
  height: '650px',
};

// center
const center = {
  lat: 33.6844, // Latitude for Islamabad
  lng: 73.0479, // Longitude for Islamabad
};

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'Your Google Api Key',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // this is just a example of getting and using the map
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF position={center}></MarkerF>
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};


const FilterMap = () => {
  const [showFilter, setShowFilter] = useState({
    rent: false,
    condition: false,
    type: false,
    bedroom: false,
    toiletBathroom: false,
    furnishing: false,
    size: false,
    amenities: false,
    price: false,
  });

  const [filters, setFilters] = useState({
    rent: 'rent',
    condition: [],
    type: [],
    bedroom: 0,
    toiletBathroom: { toilet: 0, bathroom: 0 },
    furnishing: [],
    size: { min: 0, max: 0 },
    amenities: [],
    price: { min: 0, max: 0 },
  });

  const handleFilterClick = (filter) => {
    setShowFilter((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  const handleApplyClick = (filter) => {
    console.log(`Applied Filter: ${filter}`, filters[filter]);

    setShowFilter((prevState) => ({
      ...prevState,
      [filter]: false,
    }));
  };

  const handleInputChange = (event, filter) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFilters((prevState) => ({
        ...prevState,
        [filter]: checked
          ? [...prevState[filter], value]
          : prevState[filter].filter((item) => item !== value),
      }));
    } else if (type === 'radio') {
      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    } else {
      setFilters((prevState) => ({
        ...prevState,
        [filter]: {
          ...prevState[filter],
          [name]: value,
        },
      }));
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className='w-full mx-auto px-4'>
          <div className='px-3'>
            <ul className='flex flex-wrap gap-3 text-sm'>
              <li>
                <button className='flex items-center border border-black py-1 px-2 rounded-full'>
                  <span>FSBO</span>
                  <span className='ml-1'>Agent</span>
                </button>
              </li>
              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('rent')}
                >
                  <span>Rent</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.rent && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label className='text-black text-sm'>
                        <input
                          type='radio'
                          name='rent'
                          value='Rent'
                          checked={filters.rent === 'Rent'}
                          onChange={(e) => handleInputChange(e, 'rent')}
                        />
                        Rent
                      </label>
                      <label>
                        <input
                          type='radio'
                          name='rent'
                          value='Sold'
                          checked={filters.rent === 'Sold'}
                          onChange={(e) => handleInputChange(e, 'rent')}
                        />
                        Sold
                      </label>
                      <label>
                        <input
                          type='radio'
                          name='rent'
                          value='Sale'
                          checked={filters.rent === 'Sale'}
                          onChange={(e) => handleInputChange(e, 'rent')}
                        />
                        Sale
                      </label>

                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('rent')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('condition')}
                >
                  <span>Condition</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.condition && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <input
                          type='checkbox'
                          name='condition'
                          value='Completed'
                          checked={filters.condition.includes('Completed')}
                          onChange={(e) => handleInputChange(e, 'condition')}
                        />
                        Completed
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='condition'
                          value='Semi-Completed'
                          checked={filters.condition.includes(
                            'Semi-Completed'
                          )}
                          onChange={(e) => handleInputChange(e, 'condition')}
                        />
                        Semi-Completed
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='condition'
                          value='Uncompleted'
                          checked={filters.condition.includes('Uncompleted')}
                          onChange={(e) => handleInputChange(e, 'condition')}
                        />
                        Uncompleted
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('condition')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('type')}
                >
                  <span>Type</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.type && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <input
                          type='checkbox'
                          name='type'
                          value='Manshion'
                          checked={filters.type.includes('Manshion')}
                          onChange={(e) => handleInputChange(e, 'type')}
                        />
                        Manshion
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='type'
                          value='Duplex'
                          checked={filters.type.includes('Duplex')}
                          onChange={(e) => handleInputChange(e, 'type')}
                        />
                        Duplex
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='type'
                          value='Pent House'
                          checked={filters.type.includes('Pent House')}
                          onChange={(e) => handleInputChange(e, 'type')}
                        />
                        Pent House
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('type')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('bedroom')}
                >
                  <span>Bedroom</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.bedroom && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <input
                          type='number'
                          name='bedroom'
                          value={filters.bedroom}
                          onChange={(e) => handleInputChange(e, 'bedroom')}
                        />
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('bedroom')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('toiletBathroom')}
                >
                  <span>Toilet/Bathroom</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.toiletBathroom && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <span>Toilet</span>
                        <input
                          type='number'
                          name='toilet'
                          value={filters.toiletBathroom.toilet}
                          onChange={(e) =>
                            handleInputChange(e, 'toiletBathroom')
                          }
                        />
                      </label>
                      <label>
                        <span>Bathroom</span>
                        <input
                          type='number'
                          name='bathroom'
                          value={filters.toiletBathroom.bathroom}
                          onChange={(e) =>
                            handleInputChange(e, 'toiletBathroom')
                          }
                        />
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('toiletBathroom')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('furnishing')}
                >
                  <span>Furnishing</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.furnishing && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <input
                          type='checkbox'
                          name='furnishing'
                          value='Furnished'
                          checked={filters.furnishing.includes('Furnished')}
                          onChange={(e) => handleInputChange(e, 'furnishing')}
                        />
                        Furnished
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='furnishing'
                          value='Unfurnished'
                          checked={filters.furnishing.includes('Unfurnished')}
                          onChange={(e) => handleInputChange(e, 'furnishing')}
                        />
                        Unfurnished
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('furnishing')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('size')}
                >
                  <span>Size</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.size && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <span>Min Size</span>
                        <input
                          type='number'
                          name='min'
                          value={filters.size.min}
                          onChange={(e) => handleInputChange(e, 'size')}
                        />
                      </label>
                      <label>
                        <span>Max Size</span>
                        <input
                          type='number'
                          name='max'
                          value={filters.size.max}
                          onChange={(e) => handleInputChange(e, 'size')}
                        />
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('size')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <button
                  className='flex items-center border border-black py-1 px-2 rounded-full'
                  onClick={() => handleFilterClick('amenities')}
                >
                  <span>Amenities</span>
                  <span className='ml-1'>
                    <IoIosArrowDropdownCircle />
                  </span>
                </button>
                {showFilter.amenities && (
                  <div className='absolute mt-2 bg-white border border-black rounded-lg shadow-lg px-8 py-3 z-10'>
                    <div className='flex flex-col gap-4'>
                      <label>
                        <input
                          type='checkbox'
                          name='amenities'
                          value='Power Backup'
                          checked={filters.amenities.includes('Power Backup')}
                          onChange={(e) => handleInputChange(e, 'amenities')}
                        />
                        Power Backup
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='amenities'
                          value='Parking'
                          checked={filters.amenities.includes('Parking')}
                          onChange={(e) => handleInputChange(e, 'amenities')}
                        />
                        Parking
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='amenities'
                          value='Swimming Pool'
                          checked={filters.amenities.includes('Swimming Pool')}
                          onChange={(e) => handleInputChange(e, 'amenities')}
                        />
                        Swimming Pool
                      </label>
                      <label>
                        <input
                          type='checkbox'
                          name='amenities'
                          value='Gym'
                          checked={filters.amenities.includes('Gym')}
                          onChange={(e) => handleInputChange(e, 'amenities')}
                        />
                        Gym
                      </label>
                      <button
                        className='border border-black rounded-full py-1 px-2 mt-2'
                        onClick={() => handleApplyClick('amenities')}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>


          <div className='flex flex-row gap-4 my-8'>

            
                <div className='grid grid-cols-2  w-full gap-4 '>
                    {/* <div className='bg-blue-600 '>
                        jsdjjjdsvnsjvisjv
                    </div>

                    <div className='bg-red-700 p-4'>
                        kdsnj   shdfivsdvisdbv
                    </div>
                    <div className='bg-yellow-600 p-4'>
                        jsdj iusdhfihbv
                    </div>

                    <div className='bg-pink-700 p-4'>
                        kdsnj   osdjnvifjvnifj
                    </div> */}
            
                {homepics.map((pic) => (
              <Link key={pic.id} to={`/detail/${pic.id}`} className='border border-gray-200 rounded-lg overflow-hidden m-2 shadow-lg w-80'>
                <img src={pic.href} alt={pic.houseName} className='w-full h-48 object-cover' />
                <div className='p-4'>
                  <div className='flex justify-between items-center'>
                  <h2 className='text-lg font-semibold'>{pic.houseName}</h2>
                  <p className='text-gray-700 mt-2 font-semibold'>{pic.price}</p>
                  </div>
                  
                  
                  
                  <div className='flex items-center justify-between mt-2'>
                    <div className='flex items-center'>
                      <img src={pic.bedicon} alt="bed" className='w-4 h-4 mr-1' />
                      <span>{pic.beds} Beds</span>
                    </div>
                    <div className='flex items-center'>
                      <img src={pic.bathicon} alt="bath" className='w-4 h-4 mr-1' />
                      <span>{pic.bath} Baths</span>
                    </div>

                    <div className='flex items-center mt-2'>
                    <img src={pic.surface} alt="surface" className='w-4 h-4 mr-1' />
                    <span>{pic.sqft} sqft</span>
                  </div>
                  </div>
                  
                 <div className='my-2'>
                 <p className='text-gray-500 text-sm'>{pic.address}</p>
                 </div>
                </div>
              </Link>
            ))}





                </div>


            <div className='w-3/4 p-4'>
                <MapComponent  />
                
                
            </div>

            </div>

           
          
        </div>
      </div>
      </>
    
  )
}

export default FilterMap;
