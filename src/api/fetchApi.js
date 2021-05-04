async function _fetch(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data.centers;
}

export async function fetchStates() {
  const data = await _fetch(
    'https://cdn-api.co-vin.in/api/v2/admin/location/states',
  );
  return {states: data};
}

export async function fetchDistricts(stateId) {
  const data = await _fetch(
    `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`,
  );
  return {districts: data};
}

export async function fetchVaccineSlotsByPincode(pincode, date) {
  const data = await _fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
  );
  return {data};
}

export async function fetchVaccineSlotsByDistrict(districtId, date) {
  const data = await _fetch(
    `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`,
  );
  return {data};
}

function getValidSlots(slots) {
  let validSlots = [];
  slots.forEach(slot => {
    //To be continued...
  });
  return validSlots;
}
