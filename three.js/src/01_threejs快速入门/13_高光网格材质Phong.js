import * as THREE from 'three'
// 引入轨道控制器扩展库
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 引入性能监视器
import Stats from 'three/addons/libs/stats.module.js'

// 创建3D场景对象Scene
const scene = new THREE.Scene()
// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff,
//   transparent: true,
//   opacity: 0.6
// })
// * 13_高光网格材质Phong
// 模拟镜面反射，产生一个高光效果
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 20, // 高光部分的亮度，默认30
  specular: 0x444444 // 高光部分的颜色
})

//BoxGeometry：长方体
// const geometry = new THREE.BoxGeometry(100, 100, 100)
// SphereGeometry：球体
const geometry = new THREE.SphereGeometry(50)
// CylinderGeometry：圆柱
// const geometry = new THREE.CylinderGeometry( 0, 50, 100)
// PlaneGeometry：矩形平面
// const geometry = new THREE.PlaneGeometry(100,50);
// CircleGeometry：圆形平面
// const geometry = new THREE.CircleGeometry(50);
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// 创建辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150)
scene.add(axesHelper)

// 创建一个发光点-点光源
const pointLight = new THREE.PointLight(0xffffff, 5) // 参数：光源颜色 | 光照强度
pointLight.decay = 0.0 // 设置光源不随距离衰减
pointLight.position.set(2000, 2000, 2000) // 点光源位置
scene.add(pointLight)

// 可视化点光源，光源辅助观察
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
scene.add(pointLightHelper)

// 环境光:没有特定方向，整体改变场景的光照明暗
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

// 定义相机输出画布的尺寸(单位:像素px)
const width = window.innerWidth // 宽度
const height = window.innerHeight // 高度
// const camera = new THREE.PerspectiveCamera(20, width / height, 1, 3000)
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 3000)
camera.position.set(200, 200, 200)
camera.lookAt(0, 0, 0)

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

// 设置相机控件 PS作用：旋转、缩放、平移
const controls = new OrbitControls(camera, renderer.domElement)

// 创建stats对象
const stats = new Stats()
document.body.appendChild(stats.domElement) // stats.domElement web页面上输出计算结果,一个div元素

// 渲染函数  // PS 设置了渲染循环，相机控件就不需要监听change事件执行渲染操作
function render() {
  stats.update() // requestAnimationFrame循环调用的函数中调用方法update()，来刷新时间/fps等信息
  renderer.render(scene, camera) // 执行渲染操作
  requestAnimationFrame(render) // 再次执行渲染函数render，渲染下一帧
}
render()

// 窗口大小调整时触发
window.onresize = function () {
  renderer.setSize(window.innerWidth, window.innerHeight) // 重置渲染器输出画布canvas尺寸
  camera.aspect = window.innerWidth / window.innerHeight // 重置观察范围长宽比aspect为窗口宽高比
  camera.updateProjectionMatrix() // 相机的一些属性发生了变化，更新相机的投影矩阵
}
