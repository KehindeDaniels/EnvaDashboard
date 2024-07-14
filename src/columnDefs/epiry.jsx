import { parseISO, differenceInCalendarDays, startOfDay } from "date-fns";

export const expiryColumnDef = [
  {
    header: "Batch Number",
    accessorKey: "batch_number",
    cell: ({ row }) => row.original.batch_number,
  },
  {
    header: "Name",
    accessorKey: "name",
    cell: ({ row }) => row.original.name,
  },
  {
    header: "Expiry Date",
    accessorKey: "expiry_date",
    cell: ({ row }) => row.original.expiry_date,
  },
  {
    header: "Days to Expiration",
    accessorKey: "days_to_expiration",
    cell: ({ row }) => {
      const expiryDate = startOfDay(parseISO(row.original.expiry_date));
      const today = startOfDay(new Date());
      const daysToExpiration = differenceInCalendarDays(expiryDate, today);
      console.log(
        `Expiry Date: ${
          row.original.expiry_date
        }, Today: ${today.toISOString()}, Days to Expiration: ${daysToExpiration}`
      );
      return <div>{daysToExpiration}</div>;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const expiryDate = startOfDay(parseISO(row.original.expiry_date));
      const today = startOfDay(new Date());
      const isExpired = expiryDate < today;
      console.log(
        `Expiry Date: ${
          row.original.expiry_date
        }, Today: ${today.toISOString()}, Expired: ${isExpired}`
      );
      return <div>{isExpired ? "Expired" : "Expiring Soon"}</div>;
    },
  },
];
