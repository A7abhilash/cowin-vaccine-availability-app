async function _fetch(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

export async function fetchStates() {
  const data = await _fetch(
    'https://cdn-api.co-vin.in/api/v2/admin/location/states',
  );
  const {states} = data;
  return states;
}

export async function fetchDistricts(stateId) {
  const data = await _fetch(
    `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`,
  );
  const {districts} = data;
  return districts;
}

export async function fetchVaccineSlotsByPincode(pincode, date) {
  const data = await _fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
  );
  return {data: data.centers};
}

export async function fetchVaccineSlotsByDistrict(districtId, date) {
  const data = await _fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`,
  );
  return {data: data.centers};
}
