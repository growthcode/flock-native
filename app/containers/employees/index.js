import React, { PropTypes, Component } from 'react'
import Employees from '~/components/employees'
import EmployeesData from '~/helpers/constants/EmployeesData'

export default class EmployeesContainer extends Component {
  static propTypes = {}
  constructor (props) {
    super(props)
    this.employeesAll = EmployeesData
  }

  filteredEmployees = (directoryFilter = '') => {
    if (directoryFilter.length === 0) {
      return this.employeesAll
    } else {
      return this.employeesAll.filter((employee) => {
        return `
          ${employee.first_name.toLowerCase()} ${employee.last_name.toLowerCase()}
        `.includes(directoryFilter.toLowerCase())
      })
    }
  }

  render () {
    const { navigation, directoryFilter } = this.props
    return (
      <Employees
        { ...this.props }
        employees={ this.filteredEmployees(directoryFilter) }
        onPress={ employee => navigation.navigate('Employee', { id: employee.id }) }/>
    )
  }
}
