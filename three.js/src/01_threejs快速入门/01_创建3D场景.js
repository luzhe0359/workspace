import * as THREE from 'three'

// * 01_创建3D场景
// 创建3D场景对象Scene
const scene = new THREE.Scene()

// 创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100)

// 创建一个材质对象Material
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
})

// 创建一个网络模型对象Mesh,两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 0, 0)

// 把网络模型添加到场景中
scene.add(mesh)

console.log(scene)
