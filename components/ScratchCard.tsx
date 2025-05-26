import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  AnimatedProps,
  Canvas,
  Group,
  Mask,
  Path,
  Rect,
  Skia,
  SkImage,
  Image as SkImageComponent,
  useImage,
} from "@shopify/react-native-skia";

type PROPS = {
  style: StyleProp<ViewStyle>;
  image: SkImage | null;
  children?: React.ReactNode;
};
const ScratchCardData: React.FC<PROPS> = ({ style, image, children }) => {
  const [[width, height], setDimensions] = React.useState([0, 0]);
  const [isMove, setisMove] = useState(false);
  const [isScratched, setisScratched] = useState(false);
  const path = useRef(Skia.Path.Make());
  const handleTouchEnd = () => {
    if (isMove) {
      setisScratched(true);
    }
  };
  return (
    <View
      onLayout={(e) => {
        setDimensions([
          e.nativeEvent.layout.width,
          e.nativeEvent.layout.height,
        ]);
      }}
      style={[style, styles.container]}
    >
      {Boolean(image && width && height) && (
        <>
          {isMove && <View>{children}</View>}
          <Canvas
            style={styles.canvas}
            onTouchStart={({ nativeEvent }) => {
              path.current.moveTo(nativeEvent.locationX, nativeEvent.locationY);
            }}
            onTouchMove={({ nativeEvent }) => {
              setisMove(true);
              path.current.lineTo(nativeEvent.locationX, nativeEvent.locationY);
            }}
            onTouchEnd={handleTouchEnd}
          >
            <Mask
              mode="luminance"
              mask={
                <Group>
                  <Rect x={0} y={0} width={1000} height={1000} color="white" />
                  <Path
                    path={path.current}
                    color={"black"}
                    style={"stroke"}
                    strokeJoin={"round"}
                    strokeCap={"round"}
                    strokeWidth={10}
                  />
                </Group>
              }
            >
              {!isScratched && (
                <SkImageComponent
                  image={image}
                  fit={"cover"}
                  x={0}
                  y={0}
                  width={width}
                  height={height}
                />
              )}
            </Mask>
          </Canvas>
        </>
      )}
    </View>
  );
};

export function ScratchCard({ cashbackAmount }: { cashbackAmount: string }) {
  const image = useImage(require("@/assets/images/placeholder.jpg"));
  if (!image) return <Text style={styles.loading}>Loading....</Text>;
  return (
    <ScratchCardData image={image} style={styles.ScratchCard}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("@/assets/images/gift.png")}
        />
        <Text style={styles.titleText}>You got</Text>
        <Text style={styles.subTitleText}>₹{cashbackAmount}</Text>
      </View>
    </ScratchCardData>
  );
}

const styles = StyleSheet.create({
  ScratchCard: {
    borderRadius: 16,
  },
  loading: {
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    overflow: "hidden",
    marginHorizontal:"auto"
  },
  image: {
    height: 75,
    width: 75,
    resizeMode: "contain",
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    color: "black",
    marginBottom: 6,
  },
  subTitleText: {
    fontSize: 40,
    color: "black",
    fontWeight: "700",
  },
  container: {
    position: "relative",
    width: 250,
    height: 250,
    overflow: "hidden",
    borderRadius: 16,
    marginHorizontal: "auto",
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
