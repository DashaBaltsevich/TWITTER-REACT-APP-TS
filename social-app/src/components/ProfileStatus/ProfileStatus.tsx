import React from 'react'

type PropsTypes = {
  status: string
  updateStatusThunkCreator: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<PropsTypes> {
  state = {
    editMode: false,
    status: this.props.status
  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode })
  }

  onStatusChange(event: any) {
    this.setState({ status: event?.target.value })
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <input
            value={this.state.status}
            onBlur={() => {
              this.toggleEditMode.bind(this)
              this.props.updateStatusThunkCreator(this.state.status)
            }}
            onChange={this.onStatusChange.bind(this)}
          />
        ) : (
          <p onDoubleClick={this.toggleEditMode.bind(this)} autoFocus={true}>
            {this.props.status}
          </p>
        )}
      </>
    )
  }
}
