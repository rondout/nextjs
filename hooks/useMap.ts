import L, { LatLngTuple, Layer, Map, Point } from "leaflet";
import { CSSProperties, useCallback, useEffect, useState } from "react";

interface CreateMapProps {
  id: string;
  center?: LatLngTuple;
  zoom?: number;
  minZoom?: number;
}

export function useMap(args: CreateMapProps) {
  const [map, setMap] = useState<Map>();
  const [mapWidthAndHeight, setMapStyleInfo] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    console.log("Map Mounted");
  }, []);

  const createMap = (props: CreateMapProps) => {
    const { id, center = [30.636088, 0.990693], zoom = 2, minZoom = 2 } = props;
    const myMap = L.map(id).setView(center, zoom);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      minZoom,
    }).addTo(myMap);

    myMap.setMaxBounds(L.latLngBounds(L.latLng(-90, -360), L.latLng(90, 360)));

    return myMap;
  };

  useEffect(() => {
    const domEl = document.getElementById(args.id);
    const [width, height] = [domEl.clientWidth, domEl.clientHeight];
    setMapStyleInfo({ width, height });
  }, [args.id]);

  // 生成map
  useEffect(() => {
    if (map) {
      return;
    }
    const myMap = createMap(args);
    setMap(myMap);
  }, [map, args]);

  // 聚合图标的方法
  const clustMarker = useCallback(
    (layers: Layer[]) => {
      const markers = L.markerClusterGroup();
      markers.addLayers(layers);
      map?.addLayer(markers);
    },
    [map]
  );

  // 格式化鼠标旁边的位置信息
  const getMapInforTextFromLatlng = useCallback((latlng: LatLngTuple) => {
    if (!latlng) {
      return null;
    }
    const [lat, lng] = latlng;
    return `[${lat.toFixed(6)}, ${lng.toFixed(6)}]`;
  }, []);

  // 设置位置信息跟随鼠标移动
  const getInforStyle = useCallback(
    (point: Point): CSSProperties => {
      if (!point || !mapWidthAndHeight) {
        return { display: "none" };
      }
      let { x, y } = point;
      const { height } = mapWidthAndHeight;
      // 40 = 15 + 30 30是infor的高度  15是偏移量
      if (y >= height - 40) {
        y = height - 40;
      }
      return { display: "block", top: y + 15 + "px", left: x + 15 + "px" };
    },
    [mapWidthAndHeight]
  );

  return { map, clustMarker, getMapInforTextFromLatlng, getInforStyle };
}
