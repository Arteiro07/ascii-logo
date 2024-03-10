import { OrbitControls } from "@react-three/drei";
import { Ascii } from "./Ascii";

export default function Scene() {
	return (
		<>
			<OrbitControls />
			<Ascii />
		</>
	);
}
