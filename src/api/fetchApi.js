import {useEffect, useState} from 'react';

function Fetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res.centers);
        setData(res.centers);
      })
      .catch(() => setError('Server Error!'))
      .finally(() => setLoading(false));
  }, [url]);

  return {data, loading, error};
}

export async function fetchStates() {
  const {data, loading, error} = await Fetch(
    'https://cdn-api.co-vin.in/api/v2/admin/location/states',
  );
  return {states: data, loading, error};
}

export async function fetchDistricts(stateId) {
  const {data, loading, error} = await Fetch(
    `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`,
  );
  return {districts: data, loading, error};
}

export async function fetchVaccineSlotsByPincode(pincode, date) {
  const {data, loading, error} = await Fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
  );
  return {vaccineSlots: data, loading, error};
}

export async function fetchVaccineSlotsByDistrict(districtId, date) {
  const {data, loading, error} = await Fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`,
  );
  return {vaccineSlots: data, loading, error};
}

function getValidSlots(slots) {
  let validSlots = [];
  slots.forEach(slot => {
    //To be continued...
  });
  return validSlots;
}
