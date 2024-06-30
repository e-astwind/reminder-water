import { Audio } from "expo-av";

interface IUsePlaySoundReturn {
  playSound: () => void;
}
export async function usePlaySound(): Promise<IUsePlaySoundReturn> {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/drink_water_sound.mp3")
    );
    await sound.playAsync();
    setTimeout(() => {
      sound.unloadAsync();
    }, 1200);
  };

  return { playSound };
}
