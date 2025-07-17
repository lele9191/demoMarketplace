document.addEventListener("DOMContentLoaded", async function () {
  const iframe = document.getElementById("videoFrame");

  const loadPlayer = () => {
    const newToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaGFubmVsSWQiOiI2N2NhYTg1ZjdiNWIzZGQyOGYwNGJmZTMiLCJ2aWRlb0lkIjoiNjdjYWFkMjM3YjViM2RkMjhmMTI2ODYxIiwidXNlckFjY2Vzc0tleSI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9tNTFiR3dzSW1sa1l5STZJbkJ6YVVkQ1NFeEVlSG81YmxFeWVIcDFaRWw1UkhjaUxDSnlkV01pT2lKd1lYSjBibVZ5SWl3aWFXRjBJam94TnpReU16a3dOekF4TENKemFXUWlPaUp3WVhKMElpd2laWGh3SWpvd0xDSnBaSFVpT2lJeE1qTTBJbjAuWXQ4ejBsNUhwZGlWY1NwT01qWjlfRHVrbFJrZnp0aFlxcWFvMl95MFVRTSIsImVtYWlsIjpudWxsLCJzdWIiOm51bGwsImlkYyI6InBzaUdCSExEeHo5blEyeHp1ZEl5RHciLCJydWMiOiJwYXJ0bmVyIiwiaWF0IjoxNzQ3MzIwMDM4LCJzaWQiOiJwYXJ0IiwiZXhwIjoxNzQ3MzIwOTM4LCJpZHUiOiIxMjM0In0.EOdSFbK6xE4YetMIP-Olc6MpmAqiSWnSXRJ99K9in04"; 
    console.log(`🎬 Carico player con token: ${newToken}`);

    iframe.style.display = "block";
    iframe.setAttribute(
      "src",
      `https://osteocom.me/en/videoaccess2?signature=${newToken}&sublang=fr`
    );
  };

  loadPlayer();
  
});
