
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to resolve with the first promise that settles
  return Promise.race([chinaDownload, USDownload]);
}
