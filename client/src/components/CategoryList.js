import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Select } from 'antd';
const { Option } = Select


class CategoryList extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleBlur() {
        console.log('blur');
    }

    handleFocus() {
        console.log('focus');
    }

    render() {
        return (
            <div>
            <label>Filter By: </label>
            <Select
                showSearch
                allowClear
                style={{ width: 200 }}
                placeholder="None"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {this.props.categories.map(category => (
                    <Option key={category} id={category}>{category}</Option>
                ))}
            </Select>
            </div>
        )
    }
}

function mapStateToProps({ posts, categories }) {
    return {
        categories: Object.keys(categories)
    }
}
export default connect(mapStateToProps)(CategoryList)