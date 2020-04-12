import React, { Component } from "react";
import { Table } from "reactstrap";
import NewNoteModal from "./NewNoteModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class NoteList extends Component {
  render() {
    const notes = this.props.notes;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Day of Deadline</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!notes || notes.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            notes.map(notes => (
              <tr key={notes.pk}>
                <td>{notes.name}</td>
                <td>{notes.deadlineDate}</td>
                <td>{notes.registrationDate}</td>
                <td align="center">
                  <NewNoteModal
                    create={false}
                    notes={notes}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={notes.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default NoteList;