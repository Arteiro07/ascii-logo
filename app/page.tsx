"use client";
import Scene from "@/components/Scene";
import { Canvas } from "@react-three/fiber";

export default function Home() {
	return (
		<Canvas camera={{ position: [0, 10, 0], fov: 35 }}>
			<Scene />
		</Canvas>
	);
}
