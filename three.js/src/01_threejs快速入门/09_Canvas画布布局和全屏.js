import * as THREE from 'three'
// 引入轨道控制器扩展库
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// * 01_创建3D场景
// 创建3D场景对象Scene
const scene = new THREE.Scene()
// 创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100)
// 创建一个材质对象Material
// const material = new THREE.MeshBasicMaterial({
//   color: 0x409eff, // 设置材质颜色
//   transparent: true, // 开启透明
//   opacity: 0.5 // 设置透明度
// })
// MeshBasicMaterial 不受光照影响, MeshLambertMaterial 受光照影响,即没有光源看不见
const material = new THREE.MeshLambertMaterial({
  color: 0x409eff // 设置材质颜色
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

// * 05_光源对物体表面的影响
// 创建一个发光点-点光源
const pointLight = new THREE.PointLight(0xffffff, 1.0) // 参数：光源颜色 | 光照强度
// 设置光源不随距离衰减
pointLight.decay = 0.0
// 点光源位置
// pointLight.position.set(400, 0, 0) // 点光源放在x轴上，此时只能看到x面
pointLight.position.set(300, 200, 100) // 点光源放在xyz轴上，此时都能看到
// pointLight.position.set(-300, -200, -100) // 改变点光源位置，使用OrbitControls辅助观察，此时光照在背面
// 点光源添加到场景中
scene.add(pointLight)

// * 07_平行光与环境光
// 可视化点光源，光源辅助观察
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
scene.add(pointLightHelper)

// 环境光:没有特定方向，整体改变场景的光照明暗
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

// 平行光:沿着特定方向发射
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
// directionalLight.position.set(-200, 100, 50)
// directionalLight.position.set(100, 0, 0) // x轴最亮
directionalLight.position.set(100, 100, 100) // xyz轴正面最亮
// 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
directionalLight.target = mesh
scene.add(directionalLight)
// 可视化平行光
const dirLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  5,
  0xff0000
)
scene.add(dirLightHelper)

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
// 改变相机参数，预览新的渲染效果
// 相机视线沿着x轴负半轴，mesh位于相机后面，自然看不到
// camera.position.set(-1000, 0, 0)
// camera.lookAt(-2000, 0, 0)

// * 03_渲染器
// 创建渲染器对象
const renderer = new THREE.WebGLRenderer()
// 设置渲染区域的尺寸，即Canvas画布尺寸
renderer.setSize(width, height)
// 执行渲染操作
// renderer.render(scene, camera)
// 插入到页面中
document.body.appendChild(renderer.domElement)

// * 06_相机控件OrbitControls
// 作用：旋转、缩放、平移
// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement)
// 监听鼠标、键盘事件，如果OrbitControls改变了相机参数，重新渲染三维场景
controls.addEventListener('change', function () {
  // 执行渲染操作
  // renderer.render(scene, camera)
})

// * 08_动画渲染循环
// 渲染函数  // PS 设置了渲染循环，相机控件就不需要监听change事件执行渲染操作
function render() {
  renderer.render(scene, camera) // 执行渲染操作
  mesh.rotateY(0.01) // 每次绕y轴旋转0.01弧度
  requestAnimationFrame(render) // 再次执行渲染函数render，渲染下一帧
}
render()

// * 09_Canvas画布布局和全屏
// onresize 事件会在窗口被调整大小时发生
window.onresize = function () {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix()
}
