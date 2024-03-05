import * as THREE from 'three'
// 引入轨道控制器扩展库
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 引入性能监视器
import Stats from 'three/addons/libs/stats.module.js'

// 创建3D场景对象Scene
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(100, 100, 100)
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  transparent: true,
  opacity: 0.6
})
// for (let i = 0; i < 10; i++) {
//   const mesh = new THREE.Mesh(geometry, material)
//   mesh.position.set(i * 200, 0, 0) // 沿着x轴分布
//   scene.add(mesh)
// }
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(i * 200, 0, j * 200) // 沿着x轴分布
    scene.add(mesh)
  }
}

// 创建辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(150)
scene.add(axesHelper)

// 创建一个发光点-点光源
const pointLight = new THREE.PointLight(0xffffff, 5) // 参数：光源颜色 | 光照强度
pointLight.decay = 0.0 // 设置光源不随距离衰减
pointLight.position.set(2000, 2000, 2000) // 点光源位置
scene.add(pointLight)
// 环境光:没有特定方向，整体改变场景的光照明暗
const ambient = new THREE.AmbientLight(0xffffff, 0.4)
scene.add(ambient)

// 定义相机输出画布的尺寸(单位:像素px)
const width = window.innerWidth // 宽度
const height = window.innerHeight // 高度
// const camera = new THREE.PerspectiveCamera(20, width / height, 1, 3000)
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 8000)
camera.position.set(2000, 2000, 2000) // ? 超出视锥体远裁界面的范围的会被剪裁掉，不渲染  可以调整far参数适配
// camera.lookAt(0, 0, 0)
camera.lookAt(1000, 0, 1000) // ? OrbitControls相机控件也得同步修改

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

// 设置相机控件 PS作用：旋转、缩放、平移
const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(1000, 0, 1000)
controls.update() // update()函数内会执行camera.lookAt(controls.targe)

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
