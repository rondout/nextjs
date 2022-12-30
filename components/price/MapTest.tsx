// const DynamicMap = dynamic(() => import('./DynamicMap'), {
//     ssr: false
//   });

import { Box } from "@mui/material";
import { useEffect } from "react";
import { useMap } from "../../hooks/useMap";

const mapId = "map-test111";

export default function MapTest() {
  const map = useMap({ id: mapId });

  useEffect(() => {
    console.log("AAAAA", mapId);
  }, []);

  return (
    <Box id={mapId} sx={{ width: 200, height: 200 }}>
      MapContainer
    </Box>
  );
}
