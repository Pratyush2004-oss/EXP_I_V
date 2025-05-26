export const IMAGES = [
  "@/assets/images/package1.jpg",
  "@/assets/images/package2.jpg",
  "@/assets/images/package3.jpg",
  "@/assets/images/package4.jpg",
  "@/assets/images/package5.jpg",
  "@/assets/images/package6.jpg",
  "@/assets/images/package7.jpg",
  "@/assets/images/package8.jpg",
  "@/assets/images/package9.jpg",
  "@/assets/images/package10.jpg",
  "@/assets/images/package11.jpg",
  "@/assets/images/package12.jpg",
  "@/assets/images/package13.jpg",
  "@/assets/images/package14.jpg",
  "@/assets/images/package15.jpg",
  "@/assets/images/package16.jpg",
  "@/assets/images/package17.jpg",
  "@/assets/images/package18.jpg",
  "@/assets/images/package19.jpg",
  "@/assets/images/package20.jpg",
];

export const ADVENTUREIMAGES = [
  "@/assets/images/adventure1.jpg",
  "@/assets/images/adventure2.jpg",
  "@/assets/images/adventure3.jpg",
  "@/assets/images/adventure4.jpg",
  "@/assets/images/adventure5.jpg",
  "@/assets/images/adventure6.jpg",
  "@/assets/images/adventure7.jpg",
  "@/assets/images/adventure8.jpg",
  "@/assets/images/adventure9.jpg",
  "@/assets/images/adventure10.jpg",
];

const arr: number[] = [];
export const getRandomIndexedImage = (): string => {
  // get the images in random but not get the images which are already selected
  try {
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    if (arr.length > 0 && arr.includes(randomIndex)) {
      return getRandomIndexedImage();
    }
    arr.push(randomIndex);
    return IMAGES[randomIndex];
  } catch (error) {
    return getRandom();
  }
};

export const getRandom = (): string => {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  return IMAGES[randomIndex];
};

export const getRandomAdventureImage = (): string => {
  const randomIndex = Math.floor(Math.random() * ADVENTUREIMAGES.length);
  return ADVENTUREIMAGES[randomIndex];
};
