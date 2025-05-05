'use client'
import {
  type ColumnDef,
  type Table as TableType,
} from "@tanstack/react-table"
import { Department } from "../types"
import getTableCol from "@/lib/TableCol"
import { useState } from "react"
import { ConfirmDialog } from "@/components/shared/ConfirmDialog"
import { RoutesName } from "@/lib/constants"
import AppTable from "@/components/shared/AppTable"

interface Props {
  data: Department[]
}
export default function DepartmentTable({data} : Props) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [rowToDelete, setRowToDelete] = useState<Department | null>(null)
    const [departmentTable, setDepartmentTable] = useState<TableType<Department> | null>(null)
    const confirmBulkDelete = () => {
        if (rowToDelete) {
          // Single row deletion
          console.log("Deleting department:", rowToDelete.name)
          //! delete single item
          setRowToDelete(null)
        } else {
          // Bulk deletion
          const selectedRows = departmentTable ? departmentTable.getFilteredSelectedRowModel().rows : []
          console.log("Deleting", selectedRows.length, "departments")
            //! Delete Bulk items
          // Reset selection after action
          if (departmentTable) departmentTable.resetRowSelection()
        }
        setIsDeleteDialogOpen(false)
    }
    const handleBulkDelete = () => {
      setIsDeleteDialogOpen(true)
    }
    const columns : ColumnDef<Department>[] = getTableCol<Department>({
        fields: [
            {
                accessKey: "name",
                header: "اسم القسم"
            },
            {
                accessKey: "code",
                header: "كود القسم"
            }
        ],
        actions: [
            {
                type: "copy",
                copiedKey: "code",
                copiedText: "نسخ كود القسم"
            },
            {
                type: "navigate",
                link: {
                    type: 'view',
                    href: RoutesName.DEPARTMENT,
                    text: 'عرض تفاصيل القسم'
                }
            },
            {
                type: "navigate",
                link: {
                    type: "edit",
                    href: RoutesName.DEPARTMENT,
                    text: 'تعديل بيانات القسم'
                }
            },
            {
                type: "delete",
                deleteFuncs: {
                    setRow: setRowToDelete,
                    setIsDialogOpen: setIsDeleteDialogOpen,
                    setTable: setDepartmentTable
                }
            }
        ]
    })

    
  return (
    <div>
        {/* Table */}
        <AppTable<Department> data={data} columns={columns} BulkActions={handleBulkDelete} />

        {/* Confirm Dialog for Delete */}
        <ConfirmDialog
        open={isDeleteDialogOpen}
        onOpenChange={(open) => {
          setIsDeleteDialogOpen(open)
          if (!open) setRowToDelete(null)
          if (!open) setDepartmentTable(null)
        }}
        title="تأكيد الحذف"
        description={
          rowToDelete
            ? `هل أنت متأكد من إجراء عملية الحذف لهذا العنصر`
            : `هل أنت متأكد من رغبتك في حذف العناصر المحددة`
        }
        onConfirm={confirmBulkDelete}
      />
    </div>
  )
}
