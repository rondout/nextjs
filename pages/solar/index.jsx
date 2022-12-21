import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout";
import { decrement, increment } from "../../store/reducers/counter";
import styles from "./solar.module.css";

export default function SolarSystem() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleAddCount = () => {
    console.log("ADD");
    dispatch(increment());
  };

  const handleMinusCount = () => {
    dispatch(decrement());
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <Button variant="outlined" sx={{ margin: "auto" }}>
          This is solar system {count}
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={handleAddCount}>
          add
        </Button>
        <Button variant="contained" onClick={handleMinusCount}>
          minus
        </Button>
      </Box>
      <div className={styles.container}>
        {/* 太阳 */}
        <div className={styles.sun}>Sun</div>
        {/* 水星 */}
        <div className={styles.planet + " " + styles.mercury}>
          <span className={styles.text + " " + styles.mercuryText}>水</span>
        </div>
        <div className={styles.orbit + " " + styles.mercuryOrbit}></div>
        {/* 金星 */}
        <div className={styles.planet + " " + styles.venus}>
          <span className={styles.text + " " + styles.venusText}>金</span>
        </div>
        <div className={styles.orbit + " " + styles.venusOrbit}></div>
        {/* 地球 */}
        <div className={styles.planet + " " + styles.earth}>
          <span className={styles.text + " " + styles.earthText}>地</span>
        </div>
        <div className={styles.orbit + " " + styles.earthOrbit}></div>
        {/* 火星 */}
        <div className={styles.planet + " " + styles.mars}>
          <span className={styles.text + " " + styles.marsText}>火</span>
        </div>
        <div className={styles.orbit + " " + styles.marsOrbit}></div>
        {/* 木星 */}
        <div className={styles.planet + " " + styles.jupiter}>
          <span className={styles.text + " " + styles.jupiterText}>木</span>
        </div>
        <div className={styles.orbit + " " + styles.jupiterOrbit}></div>
        {/* 土星 */}
        <div className={styles.planet + " " + styles.saturn}>
          <span className={styles.text + " " + styles.saturnText}>土</span>
        </div>
        <div className={styles.orbit + " " + styles.saturnOrbit}></div>
        {/* 天王星 */}
        <div className={styles.planet + " " + styles.tianwang}>
          <span className={styles.text + " " + styles.tianwangText}>天</span>
        </div>
        <div className={styles.orbit + " " + styles.tianwangOrbit}></div>
        {/* 海王星 */}
        <div className={styles.planet + " " + styles.haiwang}>
          <span className={styles.text + " " + styles.haiwangText}>海</span>
        </div>
        <div className={styles.orbit + " " + styles.haiwangOrbit}></div>
      </div>
    </Layout>
  );
}
