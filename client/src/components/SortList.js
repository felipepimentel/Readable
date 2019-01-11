import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Select } from 'antd';
const { Option } = Select


class SortList extends Component {
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
                <label>Order By: </label>
                <Select
                    style={{ width: 200 }}
                    defaultValue="1"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value='1'>Vote Score</Option>
                    <Option value='2'>Created Date</Option>
                </Select>
            </div>
        )
    }
}

export default connect()(SortList)