const API = `${location.protocol}//${location.hostname}:8000/api`;

// ---------- habitaciones ----------
export async function loadRooms_api() {
  const response = await fetch(`${API}/rooms`);
  if (!response.ok) {
    throw new Error(`Error al cargar habitaciones: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function Room_api(id) {
  const response = await fetch(`${API}/rooms/${id}`);
  if (!response.ok) {
    throw new Error(`Error al cargar habitación específica: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function createRoom_api(data) {
  const response = await fetch(`${API}/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al crear habitación: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function updateRoom_api(id, data) {
  const response = await fetch(`${API}/rooms/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al actualizar habitación: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function deleteRoom_api(id) {
  const response = await fetch(`${API}/rooms/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Error al eliminar habitación: HTTP ${response.status}`);
  }
  return await response.json();
}

// ---------- huéspedes ----------
export async function Guests_api() {
  const response = await fetch(`${API}/guests`);
  if (!response.ok) {
    throw new Error(`Error al cargar huéspedes: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function SpecificGuest_api(id) {
  const response = await fetch(`${API}/guests/${id}`);
  if (!response.ok) {
    throw new Error(`Error al cargar huésped específico: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function createGuest_api(data) {
  const response = await fetch(`${API}/guests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al registrar huésped: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function deleteGuest_api(id) {
  const response = await fetch(`${API}/guests/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Error al eliminar huésped: HTTP ${response.status}`);
  }
  return await response.json();
}

// ---------- reservas ----------
export async function Reservations_api(status = "") {
  const query = status ? `?status=${encodeURIComponent(status)}` : "";
  const response = await fetch(`${API}/reservations${query}`);
  if (!response.ok) {
    throw new Error(`Error al cargar reservas: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function SpecificReservation_api(id) {
  const response = await fetch(`${API}/reservations/${id}`);
  if (!response.ok) {
    throw new Error(`Error al cargar reserva específica: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function createReservation_api(data) {
  const response = await fetch(`${API}/reservations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Error al crear reserva: HTTP ${response.status}`);
  }
  return await response.json();
}

export async function changeReservation_api(id, action) {
  const response = await fetch(`${API}/reservations/${id}/${action}`, { method: "PATCH" });
  if (!response.ok) {
    throw new Error(`Error al cambiar estado de reserva: HTTP ${response.status}`);
  }
  return await response.json();
}