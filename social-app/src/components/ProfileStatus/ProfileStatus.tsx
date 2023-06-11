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

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatusThunkCreator(this.state.status)
  }

  onStatusChange = (event: any) => {
    this.setState({ status: event?.target.value })
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <textarea
            value={this.state.status}
            onBlur={this.deactivateEditMode}
            onChange={this.onStatusChange}
            style={{
              width: '100%',
              height: '52px'
            }}
          />
        ) : (
          <p onDoubleClick={this.activateEditMode} autoFocus={true}>
            {this.props.status || 'no status'}
          </p>
        )}
      </>
    )
  }
}
