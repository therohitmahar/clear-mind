"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  Shield,
  ShoppingCart,
  Video,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { therapists } from "@/lib/data";
import { cn } from "@/lib/utils";

type SessionType = "online" | "in-person";
type BookingStep = 1 | 2 | 3;

interface BookingState {
  step: BookingStep;
  selectedTherapist: (typeof therapists)[number] | null;
  sessionType: SessionType;
  selectedDate: Date | null;
  selectedTime: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerMessage: string;
  agreeToTerms: boolean;
}

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
  "07:30 PM",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return { firstDay, daysInMonth };
};

const isSameMonth = (left: Date, right: Date) =>
  left.getMonth() === right.getMonth() &&
  left.getFullYear() === right.getFullYear();

export default function BookingPage() {
  const [booking, setBooking] = useState<BookingState>({
    step: 1,
    selectedTherapist: null,
    sessionType: "online",
    selectedDate: null,
    selectedTime: "",
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerMessage: "",
    agreeToTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const therapistId = params.get("therapist");
    const requestedSession = params.get("session");

    if (requestedSession === "online" || requestedSession === "in-person") {
      setBooking((previous) =>
        previous.sessionType === requestedSession
          ? previous
          : { ...previous, sessionType: requestedSession }
      );
    }

    if (!therapistId) {
      return;
    }

    const presetTherapist = therapists.find(
      (therapist) => therapist.id === therapistId
    );

    if (!presetTherapist) {
      return;
    }

    setBooking((previous) => {
      if (previous.selectedTherapist?.id === presetTherapist.id) {
        return previous;
      }

      return {
        ...previous,
        selectedTherapist: presetTherapist,
        step: previous.step === 1 ? 2 : previous.step,
      };
    });
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
  const canGoToPreviousMonth = currentMonth > new Date(today.getFullYear(), today.getMonth(), 1);

  const selectTherapist = (therapist: (typeof therapists)[number]) => {
    setBooking((previous) => ({
      ...previous,
      selectedTherapist: therapist,
    }));
  };

  const goToNextStep = () => {
    setBooking((previous) => ({
      ...previous,
      step: Math.min(previous.step + 1, 3) as BookingStep,
    }));
  };

  const goToPrevStep = () => {
    setBooking((previous) => ({
      ...previous,
      step: Math.max(previous.step - 1, 1) as BookingStep,
    }));
  };

  const selectDate = (day: number) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    setBooking((previous) => ({ ...previous, selectedDate: date }));
  };

  const selectTime = (time: string) => {
    setBooking((previous) => ({ ...previous, selectedTime: time }));
  };

  const canProceed = () => {
    switch (booking.step) {
      case 1:
        return Boolean(booking.selectedTherapist);
      case 2:
        return Boolean(booking.selectedDate && booking.selectedTime);
      case 3:
        return Boolean(
          booking.customerName.trim() &&
            booking.customerEmail.trim() &&
            booking.customerPhone.trim() &&
            booking.agreeToTerms
        );
      default:
        return false;
    }
  };

  const handlePrimaryAction = () => {
    if (!canProceed()) {
      return;
    }

    if (booking.step === 3) {
      setSubmitted(true);
      return;
    }

    goToNextStep();
  };

  const steps = [
    { number: 1, label: "Therapist", completed: booking.step > 1 || submitted },
    { number: 2, label: "Schedule", completed: booking.step > 2 || submitted },
    { number: 3, label: "Details", completed: submitted },
  ] as const;

  return (
    <div className="min-h-screen bg-background-light">
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
          <span className="section-eyebrow">Book a Session</span>
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="mb-3 font-display text-4xl font-bold leading-tight text-text-main sm:text-5xl">
                Choose a therapist and send your booking request
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-text-muted sm:text-lg">
                Pick the therapist, session mode, and time that feels right. We
                will confirm availability and next steps directly with you.
              </p>
            </div>
            <div className="rounded-2xl bg-primary/5 p-5">
              <p className="mb-2 text-sm font-semibold text-primary">
                What happens after you submit
              </p>
              <p className="text-sm leading-relaxed text-text-muted">
                This form sends a booking request, not an instant payment. The
                ClearMind team will reach out to confirm your slot and guide you
                through the final confirmation.
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <section className="lg:col-span-8">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Request submitted
                    </p>
                    <h2 className="font-display text-3xl font-bold text-text-main">
                      We&apos;ve received your booking details
                    </h2>
                  </div>
                </div>

                <p className="mb-8 max-w-2xl text-text-muted">
                  A member of the ClearMind team will contact you to confirm
                  availability, answer questions, and help with the final
                  session confirmation.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-background-light p-5">
                    <p className="mb-1 text-sm font-semibold text-text-main">
                      1. Availability check
                    </p>
                    <p className="text-sm text-text-muted">
                      We confirm your therapist and time preference.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-background-light p-5">
                    <p className="mb-1 text-sm font-semibold text-text-main">
                      2. Final confirmation
                    </p>
                    <p className="text-sm text-text-muted">
                      We share any final instructions for your session mode.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-background-light p-5">
                    <p className="mb-1 text-sm font-semibold text-text-main">
                      3. Session support
                    </p>
                    <p className="text-sm text-text-muted">
                      You arrive prepared and know what to expect.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto">Return Home</Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Contact the Team
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            <aside className="lg:col-span-4">
              <BookingSummary booking={booking} submitted />
            </aside>
          </div>
        ) : (
          <>
            <div className="mb-10 overflow-x-auto">
              <div className="mx-auto flex min-w-[320px] items-center justify-center gap-2 sm:gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors sm:h-10 sm:w-10",
                          step.completed || booking.step === step.number
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-500"
                        )}
                      >
                        {step.completed ? (
                          <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs",
                          booking.step >= step.number
                            ? "text-primary"
                            : "text-gray-400"
                        )}
                      >
                        {step.label}
                      </span>
                    </div>

                    {index < steps.length - 1 ? (
                      <div
                        className={cn(
                          "mx-2 h-[2px] w-10 rounded-full sm:mx-4 sm:w-16",
                          steps[index].completed ? "bg-primary" : "bg-gray-200"
                        )}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <section className="lg:col-span-8">
                {booking.step === 1 ? (
                  <>
                    <header className="mb-8">
                      <h2 className="mb-2 font-display text-3xl font-bold text-text-main sm:text-4xl">
                        Choose your therapist
                      </h2>
                      <p className="max-w-2xl text-text-muted">
                        Start with the therapist whose approach and communication
                        style feel most comfortable to you.
                      </p>
                    </header>

                    <div className="space-y-5">
                      {therapists.map((therapist) => {
                        const isSelected =
                          booking.selectedTherapist?.id === therapist.id;

                        return (
                          <article
                            key={therapist.id}
                            className={cn(
                              "rounded-3xl bg-white p-5 shadow-sm ring-1 transition-all sm:p-6",
                              isSelected
                                ? "ring-primary shadow-md"
                                : "ring-gray-100 hover:ring-primary/30"
                            )}
                          >
                            <div className="flex flex-col gap-5 md:flex-row">
                              <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-gray-100 sm:h-32 sm:w-32">
                                <Image
                                  src={therapist.image}
                                  alt={therapist.name}
                                  fill
                                  className="object-cover object-top"
                                  sizes="128px"
                                />
                              </div>

                              <div className="flex-1">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                  <div>
                                    <h3 className="font-display text-2xl font-bold text-text-main">
                                      {therapist.name}
                                    </h3>
                                    <p className="font-semibold text-primary">
                                      {therapist.title}
                                    </p>
                                  </div>
                                  <div className="rounded-2xl bg-background-light px-4 py-3 text-left sm:text-right">
                                    <p className="text-lg font-bold text-text-main">
                                      ₹
                                      {therapist.sessionPrice?.discounted ||
                                        1500}
                                    </p>
                                    <p className="text-xs uppercase tracking-[0.16em] text-text-muted">
                                      {therapist.sessionDuration || "50 min"}{" "}
                                      session
                                    </p>
                                  </div>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                                  {therapist.taglines?.[0] ||
                                    therapist.description.split("\n")[0]}
                                </p>

                                {therapist.languages?.length ? (
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {therapist.languages.map((language) => (
                                      <span
                                        key={language}
                                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                                      >
                                        {language}
                                      </span>
                                    ))}
                                  </div>
                                ) : null}

                                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                  <p className="text-sm text-text-muted">
                                    Best for:{" "}
                                    <span className="font-medium text-text-main">
                                      {therapist.concernsHelped?.slice(0, 2).join(
                                        ", "
                                      )}
                                    </span>
                                  </p>
                                  <Button
                                    variant={isSelected ? "primary" : "outline"}
                                    onClick={() => selectTherapist(therapist)}
                                    className="w-full sm:w-auto"
                                  >
                                    {isSelected ? "Selected" : "Choose therapist"}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </>
                ) : null}

                {booking.step === 2 ? (
                  <>
                    <header className="mb-8">
                      <h2 className="mb-2 font-display text-3xl font-bold text-text-main sm:text-4xl">
                        Pick your session type and time
                      </h2>
                      <p className="max-w-2xl text-text-muted">
                        Choose whether you want an online or in-person session,
                        then select a day and a time window that works for you.
                      </p>
                    </header>

                    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() =>
                          setBooking((previous) => ({
                            ...previous,
                            sessionType: "online",
                          }))
                        }
                        className={cn(
                          "rounded-2xl border-2 p-4 text-left transition-colors",
                          booking.sessionType === "online"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white hover:border-primary/30"
                        )}
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <div className="rounded-full bg-primary/10 p-3 text-primary">
                            <Video className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-text-main">
                              Online video session
                            </p>
                            <p className="text-sm text-text-muted">
                              Private session from home
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setBooking((previous) => ({
                            ...previous,
                            sessionType: "in-person",
                          }))
                        }
                        className={cn(
                          "rounded-2xl border-2 p-4 text-left transition-colors",
                          booking.sessionType === "in-person"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 bg-white hover:border-primary/30"
                        )}
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <div className="rounded-full bg-primary/10 p-3 text-primary">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-text-main">
                              In-person session
                            </p>
                            <p className="text-sm text-text-muted">
                              Visit the Mira Road clinic
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6">
                        <div className="mb-6 flex items-center justify-between gap-4">
                          <div>
                            <h3 className="flex items-center gap-2 font-semibold text-text-main">
                              <Calendar className="h-5 w-5 text-primary" />
                              Select a date
                            </h3>
                            <p className="text-sm text-text-muted">
                              Choose a day from the calendar
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentMonth(
                                  new Date(
                                    currentMonth.getFullYear(),
                                    currentMonth.getMonth() - 1
                                  )
                                )
                              }
                              disabled={!canGoToPreviousMonth}
                              className="rounded-lg p-2 text-text-muted transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              <ArrowLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setCurrentMonth(
                                  new Date(
                                    currentMonth.getFullYear(),
                                    currentMonth.getMonth() + 1
                                  )
                                )
                              }
                              className="rounded-lg p-2 text-text-muted transition hover:bg-gray-100"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <p className="mb-4 text-center text-sm font-semibold text-text-main">
                          {monthNames[currentMonth.getMonth()]}{" "}
                          {currentMonth.getFullYear()}
                        </p>

                        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                            <div key={day} className="py-2">
                              {day}
                            </div>
                          ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                          {Array.from({ length: firstDay }).map((_, index) => (
                            <div key={`empty-${index}`} className="h-10" />
                          ))}

                          {Array.from({ length: daysInMonth }).map((_, index) => {
                            const day = index + 1;
                            const date = new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth(),
                              day
                            );
                            const isPast = date < today;
                            const isSelected =
                              booking.selectedDate &&
                              booking.selectedDate.getDate() === day &&
                              isSameMonth(booking.selectedDate, currentMonth);

                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => !isPast && selectDate(day)}
                                disabled={isPast}
                                className={cn(
                                  "h-10 rounded-lg font-medium transition-colors",
                                  isPast
                                    ? "cursor-not-allowed text-gray-300"
                                    : isSelected
                                    ? "bg-primary text-white"
                                    : "text-text-main hover:bg-primary/10"
                                )}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6">
                        <div className="mb-6">
                          <h3 className="mb-1 flex items-center gap-2 font-semibold text-text-main">
                            <Clock className="h-5 w-5 text-primary" />
                            Available time slots
                          </h3>
                          <p className="text-sm text-text-muted">
                            Select the slot that suits you best
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => selectTime(time)}
                              className={cn(
                                "rounded-2xl border-2 px-3 py-3 text-sm font-medium transition-colors",
                                booking.selectedTime === time
                                  ? "border-primary bg-primary/5 text-primary"
                                  : "border-gray-200 text-text-muted hover:border-primary/30"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                {booking.step === 3 ? (
                  <>
                    <header className="mb-8">
                      <h2 className="mb-2 font-display text-3xl font-bold text-text-main sm:text-4xl">
                        Share your details
                      </h2>
                      <p className="max-w-2xl text-text-muted">
                        We&apos;ll use this information to confirm your request
                        and send any session instructions.
                      </p>
                    </header>

                    <form
                      className="space-y-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6"
                      onSubmit={(event) => event.preventDefault()}
                    >
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <label className="space-y-2">
                          <span className="block text-sm font-semibold text-text-main">
                            Full Name
                          </span>
                          <input
                            type="text"
                            value={booking.customerName}
                            onChange={(event) =>
                              setBooking((previous) => ({
                                ...previous,
                                customerName: event.target.value,
                              }))
                            }
                            placeholder="e.g. Anjali Sharma"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="block text-sm font-semibold text-text-main">
                            Email Address
                          </span>
                          <input
                            type="email"
                            value={booking.customerEmail}
                            onChange={(event) =>
                              setBooking((previous) => ({
                                ...previous,
                                customerEmail: event.target.value,
                              }))
                            }
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                          />
                        </label>
                      </div>

                      <label className="space-y-2">
                        <span className="block text-sm font-semibold text-text-main">
                          Phone Number
                        </span>
                        <div className="flex rounded-xl border border-gray-200 bg-white focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                          <span className="inline-flex items-center border-r border-gray-200 px-4 text-sm text-text-muted">
                            +91
                          </span>
                          <input
                            type="tel"
                            value={booking.customerPhone}
                            onChange={(event) =>
                              setBooking((previous) => ({
                                ...previous,
                                customerPhone: event.target.value,
                              }))
                            }
                            placeholder="9876543210"
                            className="w-full rounded-r-xl px-4 py-3 text-text-main outline-none"
                          />
                        </div>
                      </label>

                      <label className="space-y-2">
                        <span className="block text-sm font-semibold text-text-main">
                          Optional note for the therapist
                        </span>
                        <textarea
                          value={booking.customerMessage}
                          onChange={(event) =>
                            setBooking((previous) => ({
                              ...previous,
                              customerMessage: event.target.value,
                            }))
                          }
                          placeholder="You can briefly share what support you are looking for."
                          rows={4}
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-text-main outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </label>

                      <label className="flex items-start gap-3 rounded-2xl bg-background-light p-4">
                        <input
                          type="checkbox"
                          checked={booking.agreeToTerms}
                          onChange={(event) =>
                            setBooking((previous) => ({
                              ...previous,
                              agreeToTerms: event.target.checked,
                            }))
                          }
                          className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm leading-relaxed text-text-muted">
                          I understand this is a booking request. ClearMind may
                          contact me to confirm availability, session details,
                          and the final next steps.
                        </span>
                      </label>

                      <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:flex-wrap sm:gap-6">
                        <div className="flex items-center gap-2 text-sm text-text-muted">
                          <Shield className="h-4 w-4 text-primary" />
                          Confidential handling of your information
                        </div>
                        <div className="flex items-center gap-2 text-sm text-text-muted">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Follow-up from the team within one business day
                        </div>
                      </div>
                    </form>
                  </>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  {booking.step > 1 ? (
                    <Button
                      variant="outline"
                      onClick={goToPrevStep}
                      className="w-full sm:w-auto"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  <Button
                    size="lg"
                    onClick={handlePrimaryAction}
                    disabled={!canProceed()}
                    className="w-full sm:w-auto"
                  >
                    {booking.step === 3 ? "Submit Booking Request" : "Continue"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </section>

              <aside className="lg:col-span-4">
                <BookingSummary booking={booking} submitted={false} />
              </aside>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function BookingSummary({
  booking,
  submitted,
}: {
  booking: BookingState;
  submitted: boolean;
}) {
  return (
    <div className="space-y-4 lg:sticky lg:top-8">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <h2 className="mb-6 flex items-center gap-2 font-display text-xl font-bold text-text-main">
          <ShoppingCart className="h-5 w-5 text-primary" />
          Booking Summary
        </h2>

        <div className="space-y-4">
          {booking.selectedTherapist ? (
            <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                <Image
                  src={booking.selectedTherapist.image}
                  alt={booking.selectedTherapist.name}
                  fill
                  className="object-cover object-top"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Therapist
                </p>
                <p className="font-semibold text-text-main">
                  {booking.selectedTherapist.name}
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-background-light p-4 text-sm text-text-muted">
              Select a therapist to build your booking summary.
            </div>
          )}

          <div className="space-y-3 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              {booking.sessionType === "online" ? (
                <Video className="h-4 w-4 text-primary" />
              ) : (
                <MapPin className="h-4 w-4 text-primary" />
              )}
              <span>
                {booking.sessionType === "online"
                  ? "Online video session"
                  : "In-person session"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>
                {booking.selectedDate
                  ? booking.selectedDate.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Choose a preferred date"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>
                {booking.selectedTime
                  ? `${booking.selectedTime} (${booking.selectedTherapist?.sessionDuration || "50 min"})`
                  : "Choose a preferred time"}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-text-muted">Session fee</span>
              <span className="text-lg font-bold text-text-main">
                ₹{booking.selectedTherapist?.sessionPrice?.discounted || 1500}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">Status</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {submitted ? "Request submitted" : `Step ${booking.step} of 3`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6">
        <h3 className="mb-2 font-display text-xl font-bold text-text-main">
          Why this flow is different
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          Therapy sessions often need a quick human confirmation. This keeps the
          process flexible, private, and easy to adjust if you need a different
          time or therapist match.
        </p>
      </div>
    </div>
  );
}
