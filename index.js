function distanceFromHqInBlocks(pickupLocation) {
  // Scuber headquarters is on 42nd Street.
  const hq_location = 42;
  const distance_blocks = Math.abs(pickupLocation - hq_location);
  return distance_blocks;
}
