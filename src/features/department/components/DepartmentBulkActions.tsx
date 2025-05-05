import { Table } from "@tanstack/react-table"
import { TableBulkActions } from "../../../components/shared/TableBulkActions"

interface Props<T> {
    table : Table<T>
    handleDelete : () => void
}

export default function DepartmentBulkActions<T>({table, handleDelete} : Props<T>) {
  return (
    <>
    {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <div className="mb-4">
              <TableBulkActions
                selectedCount={table.getFilteredSelectedRowModel().rows.length}
                onDelete={handleDelete}
              />
            </div>
          )}
    </>
  )
}
