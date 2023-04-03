import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPersonAction } from '../../redux/actions/person'

class Person extends Component {
    add = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const perObj = { id: nanoid(), name, age }
        this.props.add(perObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render () {
        return (
            <div>
                <hr />
                <h3>Person 组件, 上方组件的求和为：{this.props.qiuhe}</h3>
                <input type="text" ref={c => this.nameNode = c} placeholder="请输入名字" />
                <input type="text" ref={c => this.ageNode = c} placeholder="请输入年龄" />
                <button onClick={this.add}>添加</button>

                <ul>
                    {
                        this.props.pers.map(p => {
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        pers: state.rens,
        qiuhe: state.he
    }),
    { add: addPersonAction }
)(Person)