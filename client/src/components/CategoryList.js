import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Select } from 'antd';
import { withRouter } from 'react-router-dom';
const { Option } = Select


class CategoryList extends Component {
    label = 'Filter By:'
    constructor(props) {
        super(props)
        if (props.label)
            this.label = props.label

        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
    }

    handleChange(value) {
        const { dispatch, onChange } = this.props
        if (onChange)
            onChange(value)
        else {
            // dispatch(handleFilterPostsByCategory(value))
            this.props.history.push('/' + (value ? value : ''))
            // store.dispatch(push('/' + (value ? value : '')))
        }
    }

    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }

    render() {
        const { selectedCategory } = this.props

        return (
            <div>
                <label>{this.label} </label>
                <Select
                    showSearch
                    allowClear
                    defaultValue={selectedCategory ? selectedCategory : undefined}
                    style={{ width: 200 }}
                    placeholder="None"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {this.props.categories.map(category => (
                        <Option key={category} value={category} id={category}>{category}</Option>
                    ))}
                </Select>
            </div>
        )
    }
}

function mapStateToProps({ posts, categories }, props) {
    return {
        categories: Object.keys(categories),
        selectedCategory: props.id
    }
}
export default withRouter(connect(mapStateToProps)(CategoryList))