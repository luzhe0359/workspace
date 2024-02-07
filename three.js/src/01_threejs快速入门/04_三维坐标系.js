import * as THREE from 'three'

// * 01_创建3D场景
// 创建3D场景对象Scene
const scene = new THREE.Scene()
// 创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100)
// 创建一个材质对象Material
const material = new THREE.MeshBasicMaterial({
  color: 0x409eff, // 设置材质颜色
  transparent: true, // ? 开启透明
  opacity: 0.5 // ? 设置透明度
})
// 创建一个网络模型对象Mesh,两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material)
// 设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 0, 0)
// 把网络模型添加到场景中
scene.add(mesh)

// * 04_三维坐标系
// 创建辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150) // 参数：坐标系线段尺寸大小
// 添加到场景中
scene.add(axesHelper)

// * 02_透视投影相机
// 定义相机输出画布的尺寸(单位:像素px)
const width = window.innerWidth // 宽度
const height = window.innerHeight // 高度
/**
 * @description: 创建一个透视投影相机对象
 * @param fov	相机视锥体竖直方向视野角度	默认50
 * @param aspect	相机视锥体水平方向和竖直方向长度比，一般设置为Canvas画布宽高比width / height	默认1
 * @param near	相机视锥体近裁截面相对相机距离	默认0.1
 * @param far	相机视锥体远裁截面相对相机距离，far-near构成了视锥体高度方向	默认2000
 */
const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000)
// 相机在三维坐标系中的位置
camera.position.set(200, 200, 200)
// 相机观察目标，指向Threejs 3D空间中某个位置
camera.lookAt(mesh.position) // 指向mesh对应的位置
// camera.lookAt(0, 0, 0) // 坐标原点
// camera.lookAt(0, 10, 0) // y轴上位置10
// ? 改变相机参数，预览新的渲染效果
// 相机视线沿着x轴负半轴，mesh位于相机后面，自然看不到
// camera.position.set(-1000, 0, 0)
// camera.lookAt(-2000, 0, 0)

// * 03_渲染器
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer()
// 设置渲染区域的尺寸，即Canvas画布尺寸
renderer.setSize(width, height)
// 执行渲染操作
renderer.render(scene, camera)
// 插入到页面中
document.body.appendChild(renderer.domElement)
